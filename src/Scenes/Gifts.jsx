import React, { Component } from "react";
import Layouts from "../Components/Layouts";
import HeroPic from "../Components/HeroPic.jsx";
import Image from "../Components/Image.jsx";
import PageTitle from "../Components/PageTitle.jsx";
import SubTitle from "../Components/SubTitle.jsx";
import Section from "../Components/Section.jsx";
import styled from "styled-components";

class Gifts extends Component {
  render() {
    const Poem = styled.div``;
    return (
      <div>
        <Image fileName="gift-title.jpg" />
        <Layouts.ContentWidthWrapper>
          <Section>
            <p>#ShacklefordWedding2018</p>
          </Section>
        </Layouts.ContentWidthWrapper>

        <HeroPic fileName={"piggies.jpg"} />

        <Layouts.ContentWidthWrapper>
          <Section>
            <Poem>
              We tried to make a wedding list<br />
              of presents you might buy,<br />
              But couldn't think of what we'd like<br />
              and here's the reason why.<br />
              We have all of our bedding,<br />
              a microwave and pots.<br />
              The toaster's working perfectly,<br />
              the kettle still gets hot.<br />
              But here's some things we'd love to have,<br />
              The list is only three,<br />
              The first is sand, the next is sun,<br />
              and thirdly there's the sea.<br />
              <br />
              Now please don't think us cheeky,<br />
              We're trying to do this with tact,<br />
              But we've been living together a while now,<br />
              So there isn't much we lack.<br />
              <br />
              Even though it's not traditional,<br />
              and not the way it's done..<br />
              We'd appreciate a little help<br />
              To spend time in Mauritius sun.<br />
              <br />
              So if you would like to give a gift<br />
              And send us on our way;<br />
              a contribution to our honeymoon,<br />
              Would really make our day!<br />
              <br />
            </Poem>
            <p>
              Honeymoon Wishlist<br />
              <a href="https://www.trailfinders.com/wishlist#/faf-login">
                www.trailfinders.com/wishlist#/faf-login
              </a>
              Wishlist Number: 5BHJW5 <br />(please do not copy and paste this
              code, but type in)<br />
              <br />
            </p>
            <p>
              Registry
              <a href="https://www.weddingshop.com/find-a-list">
                www.weddingshop.com/find-a-list
              </a>
            </p>
          </Section>
          <br />
          <HeroPic fileName={"holiday.jpg"} />
          <br />
          <br />
        </Layouts.ContentWidthWrapper>
      </div>
    );
  }
}

export default Gifts;
