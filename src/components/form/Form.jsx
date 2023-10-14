import React from "react";
import styles from "./form.module.css";
import Button from "../button/Button";
import Img from "../image/Img";

const Form = ({ data, setData, handleSubmit }) => {
  return (
    <>
      <div className={styles.job}>
        <div className={styles.card}>
          <form onSubmit={handleSubmit}>
            <div className={styles.data}>
              <div className={styles.image}>
                <input
                  required
                  placeholder="Image address"
                  value={data?.image}
                  onChange={(e) => setData({ ...data, image: e.target.value })}
                />
              </div>

              <div className={styles.name}>
                <input
                  required
                  value={data?.company}
                  placeholder="name of company"
                  onChange={(e) =>
                    setData({ ...data, company: e.target.value })
                  }
                />
              </div>

              <div>
                <span className={styles.lable}>Package :</span>
                <span className={styles.package}>
                  <input
                    required
                    value={data?.packages}
                    type="number"
                    onChange={(e) =>
                      setData({ ...data, packages: e.target.value })
                    }
                  />{" "}
                  Rs.
                </span>
              </div>

              <div>
                <span className={styles.lable}>duration :</span>
                <span className={styles.location}>
                  <input
                    required
                    value={data?.duration}
                    type="number"
                    onChange={(e) =>
                      setData({ ...data, duration: e.target.value })
                    }
                  />{" "}
                  months
                </span>
              </div>

              <div>
                <span className={styles.lable}>location :</span>
                <span className={styles.location}>
                  <input
                    required
                    value={data?.location}
                    onChange={(e) =>
                      setData({ ...data, location: e.target.value })
                    }
                  />
                </span>
              </div>

              <div>
                <span className={styles.lable}>km :</span>
                <span className={styles.km}>
                  <input
                    required
                    value={data?.km}
                    type="number"
                    onChange={(e) => setData({ ...data, km: e.target.value })}
                  />{" "}
                  km
                </span>
              </div>

              <div>
                <span className={styles.lable}>by :</span>
                <span className={styles.by}>
                  <input
                    required
                    value={data?.by}
                    onChange={(e) => setData({ ...data, by: e.target.value })}
                  />
                </span>
              </div>

              <div className={styles.date}>
                <input
                  value={data?.date}
                  type="date"
                  onChange={(e) => setData({ ...data, date: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.checkbox}>
              <input
                checked={data?.bond}
                type="checkbox"
                onChange={(e) => setData({ ...data, bond: e.target.value })}
              />
              <div className={styles.lable}>Bond</div>
            </div>
            <div className={styles.checkbox}>
              <input
                checked={data?.interview}
                type="checkbox"
                onChange={(e) =>
                  setData({ ...data, interview: e.target.value })
                }
              />
              <div className={styles.lable}>inteview</div>
            </div>
            <div className={styles.checkbox}>
              <input
                checked={data?.rejected}
                type="checkbox"
                onChange={(e) => setData({ ...data, rejected: e.target.value })}
              />
              <div className={styles.lable}>Rejected</div>
            </div>

            <div className={styles.buttons}>
              <Button text={"Post"} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
