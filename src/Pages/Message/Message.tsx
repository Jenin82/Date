import { Navbar } from "../../Components/Navbar/Navbar";
import { Filtersvg, Searchsvg } from "../../assets/svg";
import styles from "./Message.module.css";

type Props = {};

export const Message = (_props: Props) => {
  const data = [
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 1,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 0,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 0,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 5,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 1,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 0,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 0,
    },
    {
      image: "https://source.unsplash.com/random",
      name: "John Doe",
      message: "Hello! How are you?",
      LastMsgtime: "10:45 AM",
      unread: 5,
    },
  ];
  return (
    <div className={styles.Wrapper}>
      <div>
        <div>
          <h1>Messages</h1>
          <button>
            <Filtersvg />
          </button>
        </div>
        <div>
          <Searchsvg />
          <input type="text" placeholder="search" />
        </div>
        <div>
          <h3>Messages</h3>
          <div>
            {data.map(({image,name,message,LastMsgtime,unread})=>{
              return(
                <div>
                  <div>
                    <img src={image} alt="" />
                    <div>
                      <h3>{name}</h3>
                      <p>{message}</p>
                    </div>
                  </div>
                  <div>
                    <p>{LastMsgtime}</p>
                    <p>{unread}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
