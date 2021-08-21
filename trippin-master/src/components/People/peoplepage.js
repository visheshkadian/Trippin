import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Search from "@material-ui/icons/Search";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function PoplePage(props) {
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
                  <br/>
                  <br/>
                  <br/>
                  <br/> 
                  <div className={classes.name}>
                    <h2 className={classes.title}>Find your inspiration</h2>
                    <br/>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
                <h3>
              <p>
                Use our extensive database of bloggers to perfect your research before travelling. Our guides, locals and bloggers have all the exoerience and data you need.{" "}
              </p>
              </h3>
            </div>
            <GridContainer justify="center">
        <div className={classes.space50} />
        <div id="images">
        <center>
          <br/>
          <br/>
          <div>
                <CustomInput
                  red
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{
                    className: classes.formControl
                  }}
                  inputProps={{
                    placeholder: "Search People",
                    inputProps: {
                      "aria-label": "Search People",
                      className: classes.searchInput
                    }
                  }}
                />
                <Button justIcon round color="red">
                  <Search className={classes.searchIcon} />
                </Button>
              </div>
              <br />
              <br />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
              <div className={classes.name}>
                    <h2 className={classes.title}>Top Bloggers</h2>
                    <br/>
                  </div>
                  <div className={classes.description}>
                <h3>
              <p>
                They've been there, done that.{" "}
              </p>
              </h3>
            </div>
          </center>
          <br />
          
          <br/>        
          <GridContainer justify="center">
          <GridItem xs={12} sm={4} className={classes.marginLeft}>
          <a href='/ronit'>   
              <img
                src='https://source.unsplash.com/1600x900/?asian man'
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
              </a>
              <center>
              <h4>Ronit Mukherjee</h4>
              </center>
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
              <a href='/jamil'> 
              <img
                src='https://source.unsplash.com/1600x900/?african man'
                alt="..."
                href = "#"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle + 
                  " " +
                  classes.imgFluid
                }
              />
              </a> 
              <center>
              <h4>Jamil King</h4>
              </center>
              
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
              <a href='/alicia'> 
              <img
                src='https://source.unsplash.com/1600x900/?australian woman'
                alt="..."
                href = "#"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle + 
                  " " +
                  classes.imgFluid
                }
              />
              </a> 
              <center>
              <h4>Alicia Richards</h4>
              </center>
              
            </GridItem>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
              <a href='/dana'> 
              <img
                src='https://source.unsplash.com/1600x900/?chinese woman'
                alt="..."
                href = "#"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle + 
                  " " +
                  classes.imgFluid
                }
              />
              </a> 
              <center>
              <h4>Dana Gantt</h4>
              </center>
              
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <a href='/profile'> 
              <img
                src='https://source.unsplash.com/1600x900/?indian man'
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
              </a>
                <center>
              <h4>Pranjal tiwari</h4>
              </center>
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <a href='/rudolph'>  
              <img
                src='https://source.unsplash.com/1600x900/?american man'
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
              </a>
              <center>
              <h4>Nishant dixit</h4>
              </center>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}


