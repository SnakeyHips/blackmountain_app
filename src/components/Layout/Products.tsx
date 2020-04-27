import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Spacer from "./Spacer";
import Product from "../../models/product";
import cbdImage from "../../assets/cbd.jpg";
import fushionImage from "../../assets/fushion.jpg";
import serenityImage from "../../assets/serenity.jpg";
import synergyImage from "../../assets/synergy.jpg";
import lipImage from "../../assets/lip.jpg";
import teaImage from "../../assets/tea.jpg";
import sanitiserImage from "../../assets/sanitiser.jpg";
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

  const fushion: Product = {
    name: "Fushion Oil",
    image: fushionImage,
    info:
      "A natural trans dermal cream which is applied to the skin. You can experience health benefits such as pain relief, inflammation relief, rheumatism pain and more.",
    price: "£9"
  };

  const serenity: Product = {
    name: "Serenity Cream",
    image: serenityImage,
    info:
      "A natural trans dermal cream which is applied to the skin. You can experience health benefits such as pain relief, inflammation relief, rheumatism pain and more.",
    price: "£19"
  };

  const salvation: Product = {
    name: "Salvation Salve",
    image: salveationImage,
    info:
      "A natural trans dermal salve which is applied to the skin. You can experience health benefits such as pain relief, inflammation relief, rheumatism pain, eczema relief and more.",
    price: "£15"
  };

  const lip: Product = {
    name: "Lip Salve",
    image: lipImage,
    info:
      "Our lip balm is petroleum free and is a blend of cbd , butters and waxes all selected for their intense moisturising and healing properties.  Flavoured it with organic vanilla  extract and orange oil",
    price: "£15"
  };

  const synergy: Product = {
    name: "Synergy Stick",
    image: synergyImage,
    info:
      "An organic mix of our 15% cbd, with a selection  of waxes and butters, including murumuru butter. Blended with a diffusion of turmeric, black pepper and frankincense,  and the moulded into a roll on stick for direct and easy application. Turmeric, black pepper and frankincense have been traditionally used for centuries as an anti inflammatory preparation to ease the pain and discomfort associated with tendonitis, arthritis  and musculoskeletal disorders.",
    price: "£15"
  };

  const sanitiser: Product = {
    name: "Hand Sanitiser",
    image: sanitiserImage,
    info:
      "There can be little doubt that cleaning your hands is one of the most important steps you can take to avoid passing on bacteria and viruses. Soap and water tend to greatly reduce the amount of germs but an alcohol based sanitiser will kill more. Our CBD infused hand sanitiser contains isopropanal alcohol and quickly kills bacteria and viruses along with allowing the CBD to dissolve through the skin.",
    price: "£9"
  };

  const tea: Product = {
    name: "Hemp Tea",
    image: teaImage,
    info:
      "Hemp tea is taken as an infusion just like ordinary tea, Its placed in an infuser. put in a mug and left for 3 minutes having been covered in boiling water. It will leave you mellow and possibly sleepy. Take this at night 1 hour before bed. Do not drive for at least 4 hours having taken a cup of hemp tea.",
    price: "£9"
  };

  const products: Product[] = [cbd, fushion, serenity, salvation, lip, synergy, sanitiser, tea];

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
              <Grid container justify="space-between">
                <p>Price: </p>
                <p className={classesBase.textRight}>{product.price}</p>
              </Grid>
              <Spacer />
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
