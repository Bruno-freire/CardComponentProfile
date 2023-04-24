import bru from '../../assets/bru.jpg'

export default function Card({name, position, number, email, links}){
  let twitter
  if(!links.twitter){
    twitter = null
  }else{
    twitter = <a href={links.twitter} target="_blank">Twitter</a>
  }
  return (
    <>
      <div className="card">
        <img src={bru} alt="" />
        <h1>{name}</h1>
        <div>
        <p>{position}</p>
        </div>
        <div>
        <p>{number}</p>
        </div>
        <div>
        <p>{email}</p>
        </div>
        <div>
        <a href={links.github} target="_blank">GitHub</a>
        <a href={links.linkedin} target="_blank">Linkedin</a>
        {twitter}
        </div>
      </div>
    </>
  )
}