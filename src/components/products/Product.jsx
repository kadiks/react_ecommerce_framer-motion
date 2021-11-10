import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Product({
  imgUrl,
  rating,
  description,
  price,
  name,
  sizes,
  photoCredits,
  index
}) {
  const variants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      }
    },
    hide: {
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }
  const variantsDetails = {
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2
      }
    },
    hide: {
      opacity: 0
    }
  }

  const variantsItem = {
    show: {
      opacity: 1,
      y: 0
    },
    hide: {
      y: 10,
      opacity: 0
    }
  }

  return (
    <motion.div
      style={{
        padding: 15
      }}
    >
      <header
        style={{
          marginBottom: 15,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: ".8em",
            color: "black"
          }}
        >
          Retour à la page d'accueil
        </Link>
        <Link
          to={`/product${index + 2}`}
          style={{
            fontSize: ".8em",
            color: "black"
          }}
        >
          Produit suivant
        </Link>
      </header>
      <motion.main
        initial="hide"
        animate="show"
        exit="hide"
        variants={variants}
      >
        <div
          style={{
            display: "flex",
            gap: 15
          }}
        >
          <div
            style={{
              width: 400
            }}
          >
            <img
              style={{
                borderRadius: 10,
                width: "100%"
              }}
              src={imgUrl}
              alt={name}
            />
            <div
              style={{
                marginTop: -30,
                textAlign: "center"
              }}
            >
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: ".8em",
                  textShadow: "2px 2px 2px #000"
                }}
                href={photoCredits.url}
              >
                {photoCredits.name}
              </a>
            </div>
          </div>
          <motion.div
            className="details"
            initial="hide"
            animate="show"
            variants={variantsDetails}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 15
            }}
          >
            <motion.h1
              style={{
                marginTop: 0
              }}
              variants={variantsItem}
            >
              {name}
            </motion.h1>
            <motion.div
              className="reviews"
              variants={variantsItem}
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between"
              }}
            >
              <span>Note: {rating}</span>
              <span>{price}€</span>
            </motion.div>
            <motion.div
              className="sizes"
              variants={variantsItem}
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: 15
              }}
            >
              {sizes &&
                ["xs", "s", "m", "l", "xl", "xxl"].map((size) => {
                  return (
                    <button disabled={!sizes.includes(size)}>
                      {size.toUpperCase()}
                    </button>
                  )
                })}
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.7
            }
          }}
        >
          <p>{description}</p>
        </motion.div>
      </motion.main>
    </motion.div>
  )
}

export default Product
