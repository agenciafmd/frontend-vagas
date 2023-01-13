import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, url, repo, imgUrl}:any ) =>{
    return(
        <Col sm={6} md={4}>
            <div className='d-flex flex-column align-items-center my-2'>
                <img src={imgUrl} alt={title} className="w-75 rounded m-3"/>
                <div className='d-flex align-items-center'>
                    <h4>
                        <a href={url} className="fs-6 link-secondary mx-2 text-decoration-none">{title}</a>
                    </h4> - <a href={repo} className="link-secondary mx-2 text-decoration-none">Repo</a>
                </div>
            </div>
        </Col>
    )   
}