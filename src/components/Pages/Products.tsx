import React from "react";
import Grid from "@material-ui/core/Grid";
import productsImage from "../../assets/products.jpg";
import Paper from "@material-ui/core/Paper";
import useStylesBase from "../../styles/styles-base";
import { Product } from "../../models/product";
import clsx from "clsx";

export default function Products() {
  const classesBase = useStylesBase();
  const products: Product[] = [];

  function renderProducts() {
    return products.map((product: Product) => (
      <Paper elevation={0} className={classesBase.paper}>
        <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>{product.name}</h6>
        <p>{product.image}</p>
        <p>{product.info}</p>
        <p>{product.price}</p>
        <p>...</p>
      </Paper>
    ));
  }

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={productsImage} className={classesBase.headerImage} alt="" />
          <span className={classesBase.headerText}>Images</span>
        </Grid>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>Dan's Rockin' Images</h4>
            <p>Here are some kick ass images I've made. Enjoy!</p>
          </Grid>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            {renderProducts()}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
