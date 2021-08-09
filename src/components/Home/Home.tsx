import { FC } from "react";
import {
  Container,
  Products,
  Card,
  Image,
  Name,
  Price,
  Category,
  Info,
  LinkTag,
  Manage,
  Circle,
  BookMarkIcon,
  CartIcon,
} from "./styles";
import CartPlus from "../../assets/cartplus.svg";
import Bookmark from "../../assets/bookmark.svg";
// import Bookmarked from "../../assets/bookmarder.svg";
import Props from "./interfaces/Props";

const Home: FC<Props> = ({ products, filter }) => {
  return (
    <Container>
      <Products>
        {products.map((product) => {
          const { title, id, price, description, category, image } = product;
          if (filter) {
            const filterLC = filter.toLowerCase();
            if (
              title.toLowerCase().includes(filterLC) ||
              description.toLowerCase().includes(filterLC) ||
              category.toLowerCase() === filterLC
            ) {
              return (
                <Card key={id}>
                  <LinkTag to="/">
                    <Image src={image} />
                    <Info>
                      <Name>{title}</Name>
                      <Price>$ {price}</Price>
                      <Category>
                        Category :{" "}
                        {category.charAt(0).toUpperCase() +
                          category.substring(1)}
                      </Category>
                    </Info>
                  </LinkTag>
                  <Circle>
                    <CartIcon src={CartPlus} alt="add cart" />
                  </Circle>
                  <Circle>
                    <BookMarkIcon src={Bookmark} alt="save to favorites" />
                  </Circle>
                </Card>
              );
            } else return null;
          } else {
            return (
              <Card key={id}>
                <LinkTag to="/">
                  <Image src={image} />
                  <Info>
                    <Name>{title}</Name>
                    <Price>$ {price}</Price>
                    <Category>
                      Category :{" "}
                      {category.charAt(0).toUpperCase() + category.substring(1)}
                    </Category>
                  </Info>
                </LinkTag>
                <Manage>
                  <Circle>
                    <CartIcon src={CartPlus} alt="add cart" />
                  </Circle>
                  <Circle>
                    <BookMarkIcon src={Bookmark} alt="save to favorites" />
                  </Circle>
                </Manage>
              </Card>
            );
          }
        })}
      </Products>
    </Container>
  );
};

export default Home;
