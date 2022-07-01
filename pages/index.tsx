import { useState } from "react";
import { Header, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
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
		</>
	);
}

export default withLayout(Home);
