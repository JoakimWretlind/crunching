import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const MapSection = styled.section`
  height: max-content;
  max-width: 1500px;
  margin: 0 auto;
  background: #f1f1f1;
  padding: 1rem;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 2rem auto 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  overflow: hidden;
  background: #f1f1f1;
  width: 90%;
  margin: 2rem auto;
  cursor: pointer;
  transition: all .4s ease-out;
  border-radius: 1rem;
  box-shadow: 0 .1rem .8rem rgba(38,61,73, .1);

  @media screen and (min-width: 600px) {
      width: 45%;
      height: 25%;
  }

  &:hover {
    box-shadow: 0 .1rem .15rem rgba(38,61,73, .04);
      img {
          transform: scaleX(1.07);
      }
      h5 {
          font-size: 3rem;
          transition: all .4s ease-in-out;
      }
      section {
          transition: all .3s ease-out;
          background: rgba(0,0,0,.8);
          bottom: 25%;
      }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`

const ImgHeader = styled.h5`
  padding: 0 3rem;
  font-size: clamp(1.6rem, 1.5vw, 2rem);
  letter-spacing: .1rem;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #f1f1f1;
  transition: all .5s ease-in-out;
`

const ImgText = styled.p`
  height: 5rem;
  margin: 1rem;
  font-size: clamp(1.3rem, 1.5vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A5A29C;
  padding: 0 3rem;
`

const ImgOverlay = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 99%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;  
  background-color: rgba(0, 0, 0, 0.5);
`;

const Img = styled.img`
    height: 30rem;
    width: 100%;
    object-fit: cover;
    transition: all .3s ease-out;
`;

const SingleImage = ({ image }) => {
  return (
    <Card>
      <Link to={image.path}>
        <ImageWrapper>
          <Img src={image.source} />
          <ImgOverlay>
            <ImgHeader>
              {image.header}
            </ImgHeader>
          </ImgOverlay>
        </ImageWrapper>
        <ImgText>
          {image.text}
        </ImgText>
      </Link>
    </Card>
  );
}

export default SingleImage;