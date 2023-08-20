import { useState } from "react"

export default function TwFollowCard ({ formatUserName, userName, name , children }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing? 'Siguiendo':'Seguir';
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }
  return (
        <article>
      <header>
        <img src={`https://unavatar.io/twitter/${userName}`} alt={`avatar ${name}`} />
      </header>
      <div>
        <strong>{name}</strong>
        <span>{formatUserName(userName)}</span>
      </div>
      <aside>
        <button onClick={handleClick}>
          <span>{text}</span>
        </button>
        <p>{children}</p>
      </aside>     
    </article>
    )
}