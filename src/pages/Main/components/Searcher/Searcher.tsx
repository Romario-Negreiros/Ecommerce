import { FC, useState } from "react";
import {
  Category,
  CategoryList,
  Container,
  Icon,
  Input,
  Wrapper,
  Legend,
} from "./styles";
import Props from "./interfaces/props";
import Male from "../../../../assets/male.svg";
import Female from "../../../../assets/female.svg";
import Laptop from "../../../../assets/laptop.svg";
import Gem from "../../../../assets/gem.svg";

const Searcher: FC<Props> = ({ setFilter }) => {
  const [value, setValue] = useState<string>("");

  return (
    <Container>
      <CategoryList>
        <Category>
          <Wrapper>
            <Icon src={Male} alt="male" />
          </Wrapper>
          <Legend>Male</Legend>
        </Category>
        <Category>
          <Wrapper>
            <Icon src={Laptop} alt="electronics" />
          </Wrapper>
          <Legend>Electronics</Legend>
        </Category>
        <Category>
          <Wrapper>
            <Icon src={Gem} alt="jewelery" />
          </Wrapper>
          <Legend>Jewelery</Legend>
        </Category>
        <Category>
          <Wrapper>
            <Icon src={Female} alt="female" />
          </Wrapper>
          <Legend>Female</Legend>
        </Category>
      </CategoryList>
      <Input
        placeholder="Search for products"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Container>
  );
};

export default Searcher;
