import React from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../Layout/TabPanel";
import LinkButton from "../Layout/LinkButton";
import homeImage from "../../assets/home.jpg";
import useStylesBase from "../../styles/styles-base";

export default function Reviews() {
  const classesBase = useStylesBase();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container direction="column" justify="center">
        <img src={homeImage} className={classesBase.headerImage} alt="" />
        <span className={classesBase.headerText}>Black Mountains CBD</span>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12}>
            <h4 className={classesBase.contentTitle}>Reviews</h4>
            <p>Here are some reviews from customers from Black Mountains CBD.</p>
            <Tabs value={value} variant="fullWidth" onChange={handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <LinkButton className={classesBase.button} to="/">
              Home
            </LinkButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
