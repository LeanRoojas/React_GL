import './Card.css'

const Card = ({profile}) => {
  return(
    <div className='container'>
      <a href={profile.html_url} target="_blank">
      <img src={profile.avatar_url} alt=''/>
      </a>
      <div>
        <div className="info">
          <div>
            <div className="name">{profile.name}</div>
            <div className="nickname">{profile.login}</div>
          </div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;