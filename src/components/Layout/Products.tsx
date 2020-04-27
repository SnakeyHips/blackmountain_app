import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Product from "../../models/product";
import cbdImage from "../../assets/cbd.jpg";
import balmImage from "../../assets/balm.jpg";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

export default function Products() {
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
    <Grid container justify="center" spacing={2}>
      {products.map((product: Product) => (
        <Grid key={product.name} item md={6} sm={10} xs={12}>
          <Card elevation={0} className={classesBase.card}>
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
              className={clsx(classesBase.cardPadding, classesBase.fillHeight)}
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
  );
}
