import React from 'react';
import '../assets/css/styles.scss';
import { Link } from "react-router-dom";
import VoteMemes from './voteMemes';

class MemePreview extends React.Component {
    render() {
        return (
            <div className="preview-wrapper">
                <div className="row heading-preview">
                    <div className="col-8">
                        <h4 className="titulo-meme">
                            {this.props.dataMeme.title}
                            <br></br>
                            <small>{this.props.dataMeme.category.name}</small>
                        </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <VoteMemes meme={this.props.dataMeme}></VoteMemes>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="card w-100 meme-container" style={{ backgroundImage: `url(${this.props.dataMeme.image})`, height: '300px' }}>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 footer-preview">
                    <div className="col-6">
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-end">
                        <a className="small-link" href="/#"> {this.props.dataMeme.positiveVotesCount} <i className="fa fa-thumbs-up"></i> {this.props.dataMeme.negativeVotesCount} <i className="fa fa-thumbs-down"></i></a>
                        <Link to={`/meme/${this.props.dataMeme._id}`} className="small-link ml-2">Ver comentarios</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemePreview;
