import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
export default function Newsletter() {
  return (
    <Section id="newsletter">
      <div className="title">
        <h1>
          <span>Subscribe</span> Newsletter
        </h1>
        <p>
          Yummy Tummy serves both lunch and dinner with a variety of fresh menu
          options. Our menu consists of 12 items including two appetizers, five
          entree selections, two kids menu options, one dessert, and two
          refreshing drink choices. The featured appetizers on our menu include
          a Poached Shrimp Salad over a creamy Buttermilk Horseradish dressing
          and Apple Wood Bacon Wrapped Asparagus Spears sautéed in butter and
          garlic. Our entrees include the Fire Burger sautéed in red pepper
          sauce with a side of garlic fries; Roasted Beet Salad with a mixture
          of local vegetables; Filet Mignon with a Red Wine Reduction resting on
          a bed of couscous with a poached vegetable medley; and finally our
          Seared Salmon with a Blackberry Gastrique on a bed of couscous with a
          poached vegetable medley. The featured dessert is a Vanilla Bean Panna
          Cotta surrounded with fresh fruit in a sweet raspberry dessert soup,
          topped with a caramelized sugar dome. Our drinks consist of a fresh
          Watermelon Lemonade infused with our homegrown basil as well as a
          variety of natural Hansen’s Sodas sweetened with cane sugar and
          flavored with real fruit.
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder="Search for food ..." />
        <button>Search</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
