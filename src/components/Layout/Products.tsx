import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Spacer from "./Spacer";
import Product from "../../models/product";
import cbdImage from "../../assets/cbd.jpg";
import fusionImage from "../../assets/fusion.jpg";
import serenityImage from "../../assets/serenity.jpg";
import synergyImage from "../../assets/synergy.jpg";
import lipImage from "../../assets/lip.jpg";
import teaImage from "../../assets/tea.jpg";
import salveationImage from "../../assets/salveation.jpg";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

export default function Products() {
  const classesBase = useStylesBase();

  const cbd: Product = {
    name: "CBD Oil",
    image: cbdImage,
    info:
      "Cannabidiol is a popular natural remedy used for many common ailments.  Better known as CBD, it is one of over 100 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa.",
    price: "£25 (5%) \n £46 (10%) \n £59 (15%) \n £74 (20%)"
  };

  const fusion: Product = {
    name: "Fusion Oil",
    image: fusionImage,
    info:
      "Water soluble version of CBD at 2%. This means it can be added to tea, coffee, beer and other drinks as a convenient means of adding to your favourite beverage when required.",
    price: "£9"
  };

  const serenity: Product = {
    name: "Serenity Cream",
    image: serenityImage,
    info:
      "An organic based moisturiser perfumed with essential oils that is light and easily absorbed. You can experience health benefits such as pain relief, inflammation relief, rheumatism pain and more.",
    price: "£19"
  };

  const salvation: Product = {
    name: "Salvation Salve",
    image: salveationImage,
    info:
      "Due to its high oil content, this transdermal salve is ideal to use for massaging onto an affected area and is also beneficial for those with very dry skin. You can experience health benefits such as pain relief, inflammation relief, rheumatism pain, eczema relief and more.",
    price: "£15"
  };

  const lip: Product = {
    name: "Lip Salve",
    image: lipImage,
    info:
      "Our lip balm is petroleum free and is a blend of cbd , butters and waxes all selected for their intense moisturising and healing properties. Flavoured with organic vanilla extract and orange oil",
    price: "£15"
  };

  const synergy: Product = {
    name: "Synergy Stick",
    image: synergyImage,
    info:
      "An organic mix of our 15% cbd, with a selection  of waxes and butters, including murumuru butter. Blended with a diffusion of turmeric, black pepper and frankincense,  and the moulded into a roll on stick for direct and easy application. Turmeric, black pepper and frankincense have been traditionally used for centuries as an anti inflammatory preparation to ease the pain and discomfort associated with tendonitis, arthritis  and musculoskeletal disorders.",
    price: "£15"
  };

  // const sanitiser: Product = {
  //   name: "Hand Sanitiser",
  //   image: sanitiserImage,
  //   info:
  //     "Soap and water can be the most effective way to clean your hands but when this is not possible an alcohol based cleanser is the best alternative. Our hand sanitiser contains isopropyl alcohol which quickly kills bacteria and viruses. We have also added our CBD oil to help moisturise and soften the skin. Limit of one per order.",
  //   price: "£9"
  // };

  const tea: Product = {
    name: "Hemp Tea",
    image: teaImage,
    info:
      "Hemp tea is taken as an infusion just like ordinary tea, Its placed in an infuser. put in a mug and left for 3 minutes having been covered in boiling water. It will leave you mellow and possibly sleepy. Take this at night 1 hour before bed. Do not drive for at least 4 hours having taken a cup of hemp tea.",
    price: "£9"
  };

  const products: Product[] = [cbd, fusion, serenity, salvation, lip, synergy, tea];

  return (
    <Grid container justify="center" spacing={4}>
      {products.map((product: Product) => (
        <Grid key={product.name} item md={6} sm={10} xs={12}>
          <Card elevation={0} className={classesBase.card}>
            <CardMedia
              component="img"
              alt={`${product.name}-image`}
              height="380"
              image={product.image}
              title={product.name}
            />
            <Grid container direction="column" className={clsx(classesBase.cardPadding, classesBase.fillHeight)}>
              <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>{product.name}</h6>
              <p>{product.info}</p>
              <Spacer />
              <Grid container justify="space-between">
                <p>Price: </p>
                <p className={classesBase.textRight}>{product.price}</p>
              </Grid>
              <Grid container justify="center">
                <Button
                  color="primary"
                  variant="contained"
                  disableElevation
                  onClick={() => (window.location.href = "mailto:cruziana2000@aol.com")}
                >
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
