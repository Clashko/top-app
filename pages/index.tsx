import { useState } from "react";
import { Header, Button, Paragraph, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
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

			<Paragraph>
				Студенты освоят не только hard skills, необходимые для работы
				веб-дизайнером, но и soft skills — навыки, которые позволят
				эффективно взаимодействовать в команде с менеджерами,
				разработчиками и маркетологами. Выпускники факультета могут
				успешно конкурировать с веб-дизайнерами уровня middle.
			</Paragraph>

			<Paragraph size="small">
				Напишу сразу в двух курсах, так как проходил оба. Java будет
				многим непросвещённым сложновата в изучении, но здесь перевес
				из-за лидирующего положения языка как самого популярного в
				программировании. Выбор мой пал на эту профессию еще и потому,
				что Java-разработчики получают самую большую зарплату. Хотя
				Python начинает догонять Java по многим моментам, но вот в
				крупном екоме разработке Джава все-таки остается главенствующей
				сейчас. Скажу так – полнота программы и интенсивность присуща
				обоим курсам GeekBrains. Хочу отметить, что с первого дня
				занятий вы приступаете к практике и получаете опыт коммерческой
				разработки уже в свое резюме. Скажу вам как прошедший это –
				реально помогло в трудоустройстве!
			</Paragraph>

			<Paragraph size="large">
				Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel
				Draw и ими можно успешно пользоваться дома или в дороге.
				Современные ноутбуки хорошо справляются с нагрузкой, так зачем
				загонять специалиста в душный офис. В этой профессии важным
				считается вдохновение, поэтому дизайнеры ищут его в разных
				местах.
			</Paragraph>

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
