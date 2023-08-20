import './App.css'
import TwFollowCard from './twFollowCard'

function App() {
  const formatUserName = (userN) =>  `@${userN}` 
  //const anotherFormatUserName (userN) = <span>@{userN}</span>

  const users = [
    {
      id: 1,
      userName: "midudev",
      name: "Miguel",
      isFollowing: true,
      unChildren: "unChildrem"
    },
    {
      id: 2,
      userName: "kikobeats",
      name: "Kiko",
      isFollowing: false,
      unChildren: "unChildrem"
    }
  ];

  return (
    <>
    {
      users.map( user => {
        return (
          <TwFollowCard
            key={user.id}
            formatUserName={formatUserName} 
            userName={user.userName}
            name={user.name}
            isFollowing={user.isFollowing}>
              {user.unChildren}
          </TwFollowCard>
        )       
      })
    }
    { /**
      <TwFollowCard 
        formatUserName={formatUserName} 
        userName="midudev" 
        name="miguel"
        isFollowing={true}>
          unChildren
      </TwFollowCard>  
      
      <TwFollowCard 
        formatUserName={formatUserName} 
        userName="kikobeats" 
        name="kikobeats"
        isFollowing={false}>
          unChildren
      </TwFollowCard>  
      
      <TwFollowCard
        formatUserName={formatUserName} 
        userName="kikobeats" 
        name="kikobeats" 
        isFollowing={true}>
      unChildren
      </TwFollowCard>
    */}
    </>    
  )
}

export default App
