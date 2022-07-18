import { GetStaticProps } from "next";
import { useState } from "react";
import {
	Header,
	Button,
	Paragraph,
	Tag,
	Rating,
	Input,
	TextArea,
} from "../components";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";
import axios from "axios";

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Header tag="h1">Текст</Header>
			<Button appearance="primary" arrow="right">
				Кнопка 1
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка 2
			</Button>

			<Paragraph size="small">Маленький</Paragraph>
			<Paragraph>Средний</Paragraph>
			<Paragraph size="large">Большой</Paragraph>

			<Tag size="small">маленький тэг</Tag>
			<Tag size="medium">большой тэг</Tag>

			<Tag color="ghost">гост тэг</Tag>
			<Tag color="red">красный тэг</Tag>
			<Tag color="grey">серый тэг</Tag>
			<Tag color="green">зеленый тэг</Tag>
			<Tag color="primary">главный тэг</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />

			<Input placeholder="test" />
			<TextArea placeholder="test" />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
		{
			firstCategory,
		}
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
