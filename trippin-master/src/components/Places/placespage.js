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

export default function PlacesPage(props) {
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
                    <h2 className={classes.title}>Find your calling</h2>
                    <br/>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
                <h3>
              <p>
                Wherever your next holiday is, be prepared with the best tips and guides, from local secrets and hidden gems to great recommendations, read about it all.
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
                    placeholder: "Search Places",
                    inputProps: {
                      "aria-label": "Search Places",
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
                    <h2 className={classes.title}>Top Places</h2>
                    <br/>
                  </div>
                  <div className={classes.description}>
                <h3>
              <p>
                This is where the hype is at.{" "}
              </p>
              </h3>
            </div>
          </center>
          <br />
          
          <br/>        
          <GridContainer justify="center">
          <GridItem xs={12} sm={4} className={classes.marginLeft}>
          <a href='/melbourne'>   
              <img
                src='https://source.unsplash.com/1600x900/?Delhi'
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              </a>
              <center>
              <h4>Jaipur</h4>
              </center>
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
              <a href='/melbourne'> 
              <img
                src='https://source.unsplash.com/1600x900/?Melbourne'
                alt="..."
                href = "#"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded + 
                  " " +
                  classes.imgFluid
                }
              />
              </a> 
              <center>
              <h4>Melbourne</h4>
              </center>
              
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
              <a href='/melbourne'> 
              <img
                src='https://source.unsplash.com/1600x900/?London'
                alt="..."
                href = "#"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded + 
                  " " +
                  classes.imgFluid
                }
              />
              </a> 
              <center>
              <h4>London</h4>
              </center>
              
            </GridItem>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
              <a href='/melbourne'> 
              <img
                src='https://source.unsplash.com/1600x900/?Beach'
                alt="..."
                href = "#"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded + 
                  " " +
                  classes.imgFluid
                }
              />
              </a> 
              <center>
              <h4>Madeira</h4>
              </center>
              
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <a href='/melbourne'> 
              <img
                src='https://source.unsplash.com/1600x900/?Waterway'
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              </a>
                <center>
              <h4>Amsterdam</h4>
              </center>
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <a href='/melbourne'>  
              <img
                src='https://source.unsplash.com/1600x900/?Switzerland'
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              </a>
              <center>
              <h4>Iceland</h4>
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


