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

export default function Melbourne(props) {
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
                  <div className={classes.name}>
                      <br/>
                      <br/>
                      <br/>
                    <h3 className={classes.title}>MELBOURNE</h3>
                    <h6>AUSTRALIA</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
              


        <div>
            <Row>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img1} />
                        <CardBody>
                            <CardTitle>Melbourne</CardTitle>
                            <CardSubtitle>Amit Sehgal</CardSubtitle>
                            <CardText>My life changing experience in Melbourne, the hidden gems, great food and amazing people. A cheapsters guide.</CardText>
                            <Button>Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img2} />
                        <CardBody>
                            <CardTitle>Melbourne</CardTitle>
                            <CardSubtitle>Ronit Mukherjee</CardSubtitle>
                            <CardText>I’ve visited Melbourne,Australia more times than I can count getting under its skin. So here's me giving you a complete guide to this heavenly city.</CardText>
                            <Button>Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img3} />
                        <CardBody>
                            <CardTitle>Melbourne</CardTitle>
                            <CardSubtitle>Pranjal Tiwari</CardSubtitle>
                            <CardText>Iceland is a photographer's paradise.My journey to wild and free Melbourne, how you can go there, guides and tips.</CardText>
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
