import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Product from "../../models/product";
import productsImage from "../../assets/products.jpg";
import cbdImage from "../../assets/cbd.jpg";
import balmImage from "../../assets/balm.jpg";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    cardPadding: {
      padding: theme.spacing(2)
    }
  })
);

export default function Products() {
  const classes = useStyles();
  const classesBase = useStylesBase();

  const cbd: Product = {
    name: "CBD OIL",
    image: cbdImage,
    info:
      "Cannabidiol is a popular natural remedy used for many common ailments.  Better known as CBD, it is one of over 100 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa.",
    price: "£20"
  };

  const balm: Product = {
    name: "SERENITY",
    image: balmImage,
    info:
      "A natural trans dermal cream which is applied to the skin. You can experience health benefits such as pain relief, inflammation relief, rheumatism pain and more.",
    price: "£40"
  };

  const products: Product[] = [cbd, balm];

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={productsImage} className={classesBase.headerImage} alt="" />
          <span className={classesBase.headerText}>Products</span>
        </Grid>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>Black Mountain CBD's Products</h4>
            <p>
              These are our current CBD products. To purchase, please send an email with what you would like to purchase
              using the Contact link on each product or send an email to{" "}
              <a href="mailto:cruziana2000@aol.com">cruziana2000@aol.com.</a>
            </p>
          </Grid>
          <Grid container justify="center" spacing={2}>
            {products.map((product: Product) => (
              <Grid key={product.name} item md={6} sm={10} xs={12}>
                <Card elevation={0} className={classes.card}>
                  <CardMedia
                    component="img"
                    alt={`${product.name}-image`}
                    height="300"
                    image={product.image}
                    title={product.name}
                  />
                  <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={clsx(classes.cardPadding, classesBase.fillHeight)}
                  >
                    <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>{product.name}</h6>
                    <p>{product.info}</p>
                    <Grid container justify="space-between">
                      <p>{product.price}</p>
                      <Button color="primary" onClick={() => (window.location.href = "mailto:cruziana2000@aol.com")}>
                        Contact
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
