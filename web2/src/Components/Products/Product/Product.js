import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import { CartContext } from "../../Cart/Cart";
export default function Product() {
  const { id } = useParams();
  const [data] = useState([
    {
      id: 1,
      title: "Perfume",
      price: 500.0,
      description:
        "Perfume",
      category: "Perfume",
      image:
        "https://www.perfumeworld.com.vn/uploads/products/2018/03/image/20180323_084823_5114.png",
      rating: {
        rate: 4.5,
        count: 120,
      },
      count: 1,
    },
    {
      id: 2,
      title: "Perfume ",
      price: 775.0,
      description:
        "Phong cách: Lãng mạn",
      category: "Perfume",
      image:
        "https://www.perfumeworld.com.vn/uploads/products/2018/10/image/1540266241.2691.png",
      rating: {
        rate: 4.1,
        count: 259,
      },
      count: 1,
    },
    {
      id: 3,
      title: "Perfume",
      price: 1651.0,
      description:
        "Phong cách: Lãng mạn, nữ tính, gợi cảm",
      category: "Perfume",
      image:
        "https://www.perfumeworld.com.vn/uploads/products/2018/03/image/20180323_084621_4610.png",
      rating: {
        rate: 4.7,
        count: 500,
      },
      count: 1,
    },
    {
      id: 4,
      title: "Perfume",
      price: 1465.0,
      description:
        "Phong cách: Lãng mạn, nữ tính, gợi cảm",
      category: "Perfume",
      image:
        "https://www.perfumeworld.com.vn/uploads/products/2018/12/image/1545203603.6683.png",
      rating: {
        rate: 4.1,
        count: 430,
      },
      count: 1,
    },
    {
      id: 5,
      title: "Perfume",
      price: 1339.0,
      description:
        "Phong cách: Lãng mạn, nữ tính, gợi cảm",
      category: "Perfume",
      image:
        "https://www.perfumeworld.com.vn/uploads/products/2018/05/image/20180504_142342.png",
      rating: {
        rate: 4.6,
        count: 400,
      },
      count: 1,
    },
    {
      id: 6,
      title: "Perfume",
      price: 1139.0,
      description:
        "Phong cách: Lãng mạn, nữ tính, gợi cảm",
      category: "Perfume",
      image:
        "https://www.perfumeworld.com.vn/uploads/products/2018/03/image/20180323_084429_4284.png",
      rating: {
        rate: 3.9,
        count: 70,
      },
      count: 1,
    },
    {
      id: 7,
      title: "Perfume",
      price: 1379.0,
      description:
        "Phong cách: Lãng mạn, nữ tính, gợi cảm",
      category: "Perfume",
      image:
        "https://www.perfumeworld.com.vn/uploads/products/2018/08/image/20180823_135745.png",
      rating: {
        rate: 4.0,
        count: 400,
      },
      count: 1,
    },
    {
      id: 8,
      title: "Perfume",
      price: 1833.0,
      description:
        "Phong cách: Lãng mạn, nữ tính, gợi cảm",
      category: "Perfume",
      image:
        "https://www.perfumeworld.com.vn/uploads/products/2018/06/image/20180627_143840.png",
      rating: {
        rate: 5.0,
        count: 100,
      },
      count: 1,
    },
    {
      id: 10,
      title: "Burberry Vintage Check Backpack",
      price: 109,
      description:
        "Dimensions: Width: 27cm, Height: 47cm, Depth: 17cm, Strap: 25cm, Handle: 10.5cm / 100% Calf Leather, 100% Polyamide / Made in Italy / Designer Model Number: 8005516 / Designer Colour: ANTIQUEYELLOW",
      category: "Buberry",
      image:
        "https://img-static.tradesy.com/item/29193772/burberry-men-s-vintage-check-antique-yellow-polyamide-backpack-0-0-650-650.jpg",
      rating: {
        rate: 4.9,
        count: 470,
      },
      count: 1,
    },
    {
      id: 11,
      title: "Burberry Hackberry Shoulder Bag",
      price: 1038.09,
      description:
        "Dimensions: Width: 18cm, Height: 12cm, Depth: 8cm / 100% Cotton, Lining: 71% Cotton, 29% Polyamide / Made in Italy / Designer Model Number: 8026608 / Designer Colour: A1363",
      category: "Buberry",
      image:
        "https://statics-cdn.fashionette.de/b/d/7/c/bd7ca3f32e6c9bd0caac52a04d449cafe4075867_A0161977_Burberry_1_pdp.jpeg",
      rating: {
        rate: 4.8,
        count: 319,
      },
      count: 1,
    },
    {
      id: 12,
      title: "Burberry Graphic Printed T-Shirt",
      price: 439.66,
      description:
        "100% Cotton / Made in Portugal / Designer Model Number: 8048289 ",
      category: "Buberry",
      image:
        "https://thewebster.us/media/catalog/product/8/0/8048289-2509-01.jpg?quality=100&fit=bounds&height=587&width=440",
      rating: {
        rate: 4.8,
        count: 400,
      },
      count: 1,
    },
    {
      id: 13,
      title: "Burberry Belted Trench Coat",
      price: 2421.19,
      description:
        "2100% Cotton, 100% Leather / Made in Italy / Designer Model Number: 8038931 / Designer Colour: A9168",
      category: "Buberry",
      image:
        "https://cdna.lystit.com/520/650/n/photos/coltortiboutique/f9f0fdac/burberry-BeigeBrown-Dockray-Trench-Coat-With-Leather-Finishes-6-Cottonleather.jpeg",
      rating: {
        rate: 4.9,
        count: 250,
      },
      count: 1,
    },
    {
      id: 14,
      title: "Burberry Graphic Printed Crewneck T-Shirt ",
      price: 366.39,
      description:
        "100% Cotton / Made in Portugal / Designer Model Number: 8042723 / Designer Colour: WHITE",
      category: "Buberry",
      image: "https://cdn.modesens.com/media/113368428?w=400&",
      rating: {
        rate: 2.2,
        count: 140,
      },
      count: 1,
    },
    {
      id: 15,
      title:
        "ADIDAS PRADA X SUPERSTAR 'CORE WHITE' ADIDAS RELEASE CORE WHITE/CORE WHITE/CORE WHITE FW6683",
      price: 8691.0,
      description:
        "MODEL NO : FW6683 / RELEASE DATE : 2019-12-04 / SERIES : CORE WHITE/CORE WHITE/CORE WHITE / STYLE: SPORTS / SEASON : ALL SEASON / CLOSURE : LACING / FUNCTIONALITY : SLIP-RESISTANT, LIGHTWEIGHT / SOLE MATERIAL : RUBBER SOLE / UPPER : LOW CUT / TOE TYPE : ROUND TOE / HEEL TYPE : FLAT HEEL",
      category: "Prada",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_1e3010ed-5197-44b4-baa1-e4e6a5cfe5ae_1512x.jpg?v=1649041810",
      rating: {
        rate: 4.6,
        count: 235,
      },
      count: 1,
    },
    {
      id: 16,
      title: "Prada logo plaque panelled jacket",
      price: 4600,
      description:
        "Comfort is key but a little style never hurt anyone. Crafted in a panelled design, this jacket from Prada is detailed with the brand's signature enamelled triangle logo and it's the perfect choice for a relaxed yet put-together look. Best of both worlds.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/15/30/35/29/15303529_26704883_1000.jpg",
      rating: {
        rate: 3.9,
        count: 340,
      },
      count: 1,
    },
    {
      id: 17,
      title: "Prada logo-print T-shirt",
      price: 1070,
      description:
        "A mermaid print adds a playful touch to this Prada T-shirt. Appearing alongside the signature triangle logo, it stands out against the white cotton construction in a contrasting black tone.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/17/50/57/03/17505703_36301086_1000.jpg",
      rating: {
        rate: 4.4,
        count: 679,
      },
      count: 1,
    },
    {
      id: 18,
      title: "Prada Double Match graphic-print shirt ",
      price: 1660,
      description:
        "That's one way to make a statement. Prada's shirt is punctuated with a distinctive graphic print not to mention a eye-catching two-tone colourway. Be bold.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/16/25/50/29/16255029_31052326_1000.jpg",
      rating: {
        rate: 4.7,
        count: 130,
      },
      count: 1,
    },
    {
      id: 19,
      title: "Prada motif-print cotton hoodie",
      price: 1580,
      description:
        "Tattoo-inspired nautical motifs prevail on Prada's SS22 collection, printed on the brand's ready-to-wear pieces. They accent the sleeves of this oversized hoodie, complemented by the brand's Triangle logo on the chest.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/17/50/48/47/17504847_37250345_1000.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
      count: 1,
    },
    {
      id: 20,
      title: "Prada Double Match panelled shirt",
      price: 1660,
      description:
        "Consider yourself a risk taker? Dare to make heads turn in this Prada shirt and let its vibrant panelled design grab attention wherever you go. Be ready for the stares.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/16/22/34/29/16223429_31076195_1000.jpg",
      rating: {
        rate: 4.6,
        count: 145,
      },
      count: 1,
    },
  ]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      // setProduct(await response.json());
      console.log(id);
      setProduct(data.find((x) => x.id === Number(id)));

      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />{" "}
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating: {product.rating && product.rating.rate}{" "}
            <i className="fa-solid fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <CartContext.Consumer>
            {({ addToCart }) => (
              <button
                className="btn btn-outline-dark px-4 py-2"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </button>
            )}
          </CartContext.Consumer>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="container py-5">
          <div className="row py-4">
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </div>
    </>
  );
}
