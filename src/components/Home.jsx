import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import products from "../data"

function Home({}) {
  return (
    <motion.div
      style={{
        padding: 15
      }}
      initial={{
        opacity: 0,
        scale: 0.95
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1
        }
      }}
      exit={{
        opacity: 0
      }}
    >
      <h1
        style={{
          textAlign: "center"
          //   marginBottom: "2em"
        }}
      >
        Le jeune campeur
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h2>Produits</h2>
          <div
            className="products"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 15
            }}
          >
            {products.map(({ imgUrl, href, name, photoCredits }) => {
              return (
                <div>
                  <motion.div
                    style={{
                      width: 180,
                      marginBottom: 10
                    }}
                    whileHover={{
                      scale: 1.05
                    }}
                  >
                    <Link to={href}>
                      <img
                        style={{
                          borderRadius: 10,
                          width: "100%"
                        }}
                        src={imgUrl}
                        alt={name}
                      />
                    </Link>
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
                  </motion.div>
                  <Link
                    style={{
                      color: "black"
                    }}
                    to={href}
                  >
                    {name}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
