import React from "react";
import { Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Products from "../Layout/Products";
import homeImage from "../../assets/home.jpg";
import mainImage from "../../assets/main.jpg";
import avatar from "../../assets/kim.jpg";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

export default function Home() {
  const classesBase = useStylesBase();
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const aboutImg = <img className={classesBase.homeLogo} src={mainImage} alt="main" />;

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={homeImage} className={classesBase.headerImage} alt="" />
          <span className={classesBase.headerText}>Black Mountains CBD</span>
        </Grid>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb2}>
            <h4 className={classesBase.contentTitle}>Who We Are</h4>
          </Grid>
          {smAndDown && (
            <Grid item sm={10} xs={12} className={clsx(classesBase.mb3, classesBase.textCenter)}>
              {aboutImg}
            </Grid>
          )}
          <Grid item md={6} sm={10} xs={12}>
            <p>
              At Black Mountains CBD we only use high quality full spectrum cannabis All our cannabis (hemp) is
              organically grown in Europe allowing us to manufacture a range of products high in CBD but low in THC.
            </p>
            <p>
              All our products are chemical free using only plant material that is hand-picked and carefully graded for
              quality. Our main hemp supplier is a member of the Cannabis Trades Association as are we. Located in the
              shadow of the beautiful Black Mountains near Abergavenny we are a small company who are versatile and
              innovative. This means we can make a CBD oil just for you.
            </p>
          </Grid>
          {!smAndDown && (
            <Grid item md={2} className={classesBase.ml2}>
              {aboutImg}
            </Grid>
          )}
          <Grid item md={8} sm={10} xs={12} className={clsx(classesBase.mt3, classesBase.mb3)}>
            <h4 className={clsx(classesBase.mt3, classesBase.mb3, classesBase.contentTitle)}>What We Do</h4>
            <p>
              We deliver high quality and hand crafted CBD products from rural Wales to anywhere in the world where CBD
              is legal. Please contact us if you are interested in CBD's promising results for your wellbeing, sleep and
              more.
            </p>
            <Products />
          </Grid>
          <Grid item sm={10} xs={12}>
            <Divider className={classesBase.divider} />
          </Grid>
          <Grid item md={4} sm={10} xs={12} className={clsx(classesBase.mt3, classesBase.mb3, classesBase.textCenter)}>
            <img src={avatar} alt="kim" className={classesBase.avatar} />
            <h6>Kim Kemp</h6>
            <h6>Owner</h6>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <Grid container justify="center" alignItems="center" className={classesBase.fillHeight}>
              <p>
                My introduction to the world of CBD was initiated by a terminal diagnosis of an incurable head cancer.
                Whilst under palliative care, my wife purchased some CBD online. With nothing to lose I began taking it
                and within three months my quality of life improved. Initially I was very sceptical, nevertheless I
                began to research and study the history and medicinal properties of this ancient herb. My findings
                inspired me to learn how to manufacture and produce my own CBD. Through continued study and practice I
                have developed a quality product that can offer the most efficacious properties, from the CBD compounds
                that originate within the cannabis plant.
              </p>
            </Grid>
          </Grid>
          <Grid item md={4} sm={10} xs={12} className={classesBase.mb3}>
            <Grid container justify="center" alignItems="center" className={classesBase.fillHeight}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Location" secondary="Abergavenny, Wales" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Email" secondary="cruziana2000@aol.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Telephone" secondary="+447855868314" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
