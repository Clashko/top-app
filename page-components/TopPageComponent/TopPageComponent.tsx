import { Advantages, Header, Product, Sort, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { HhData } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({
	page,
	products,
	firstCategory,
}: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
		sortReducer,
		{ products, sort: SortEnum.Rating }
	);

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	useEffect(() => {
		dispathSort({ type: "reset", initialState: products });
	}, [products]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Header tag="h1">{page.title}</Header>
				{products && (
					<Tag color="grey" size="medium">
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts &&
					sortedProducts.map((p) => (
						<Product layout key={p._id} product={p} />
					))}
			</div>
			<div className={styles.hhTitle}>
				<Header tag="h2">Вакансии - {page.category}</Header>
				<Tag color="red" size="medium">
					hh.ru
				</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && (
				<HhData {...page.hh} />
			)}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<Header tag="h2">Преимущства</Header>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && (
				<div
					className={styles.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			<Header tag="h2">Получаемые навыки</Header>
			{page.tags.map((t) => (
				<Tag key={t} color="primary">
					{t}
				</Tag>
			))}
		</div>
	);
};
