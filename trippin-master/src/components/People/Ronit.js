import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap';

import profile from "assets/images/faces/christian.jpg";


import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function Ronit(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax small filter image='https://source.unsplash.com/1600x900/?nature,water,mountain,beach'/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Ronit Mukherjee</h3>
                    <h6>INDIA</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Ronit has travelled far and wide, having been with us from the start as a creator. His in-depth and reliable knowledge is very useful when organising trips{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
              


        <div>
            <Row>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src='https://source.unsplash.com/1600x900/?amsterdam' />
                        <CardBody>
                            <CardTitle>Amsterdam</CardTitle>
                            <CardSubtitle>Ronit Mukherjee</CardSubtitle>
                            <CardText>My life changing experience in Madiera, the hidden gems, great food and amazing people. A cheapsters guide.</CardText>
                            <Button>Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src='https://source.unsplash.com/1600x900/?greece' />
                        <CardBody>
                            <CardTitle>Greece</CardTitle>
                            <CardSubtitle>Ronit Mukherjee</CardSubtitle>
                            <CardText>Greece is a photographer's paradise.My journey to wild and free Iceland, how you can go there, guides and tips.</CardText>
                            <Button href='/blogmain/blogmain#/blogmain'>Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
