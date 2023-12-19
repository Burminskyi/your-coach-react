import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";

const itemData = [
  {
    img: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg",
    title: "Cardio",
  },
  {
    img: "https://barbend.com/wp-content/uploads/2023/06/bodybuilders-back-barbend.com-1.jpg",
    title: "Back",
  },
  {
    img: "https://img.mensxp.com/media/content/2019/Feb/develop-a-thick-amp-broad-chest-1400x653-1549633758.jpg",
    title: "Chest",
  },
  {
    img: "https://fitnessvolt.com/wp-content/uploads/2022/05/Skinny-Forearms-Solution.jpg",
    title: "Lower arms",
  },
  {
    img: "https://www.muscleandfitness.com/wp-content/uploads/2014/06/Fit-Male-With-Big-Calves-Muscle-Walking-on-A-Treadmill.jpg?quality=86&strip=all",
    title: "Lower legs",
  },
  {
    img: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2022/06/14153553/arm-muscles-960.png",
    title: "Upper arms",
  },
  {
    img: "https://staticg.sportskeeda.com/editor/2023/01/06e57-16743831290919-1920.jpg",
    title: "Upper legs",
  },
  {
    img: "https://barbend.com/wp-content/uploads/2023/03/Barbend.com-A-shirtless-muscular-persons-shoulders-viewed-from-the-back.jpg",
    title: "Shoulders",
  },
  {
    img: "https://guardian.ng/wp-content/uploads/2019/04/waistline.jpg",
    title: "Waist",
  },
];

export default function ExercisesPage() {
  return (
    <ImageList sx={{ width: "100%"}} cols={3}>
      {itemData.map((item) => (
       <Link to={`/exercises/${item.title.toLowerCase().split(" ").join("-")}`} key={item.img} style={{ textDecoration: "none" }}>
       <ImageListItem>
         <img
           srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
           src={`${item.img}?w=248&fit=crop&auto=format`}
           alt={item.title}
           loading="lazy"
         />
         <ImageListItemBar title={item.title} position="below" />
       </ImageListItem>
     </Link>
      ))}
    </ImageList>
  );
}
