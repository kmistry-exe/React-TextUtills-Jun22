import React from 'react'

export default function About(props) {

  return (
    <div className='container'>
        {/* <h2 className='mt-5 mb-3' style={{color: props.mode === 'dark' ?  'white':'black'}}>About Us</h2> */}
        <div className="row">
            <div className="col-sm-4">
                <div className="card bg-info text-white">
                <div className="card-body">
                    <h5 className="card-title">Analyze your text</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum distinctio quibusdam in laboriosam omnis incidunt maxime voluptatibus voluptatem modi accusamus, aperiam, minus quas veritatis, ducimus libero iste et cupiditate! Pariatur.</p>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card bg-info text-white">
                <div className="card-body">
                    <h5 className="card-title">Free to use</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis quidem hic dolores sed odit libero eius eligendi tempore illo distinctio fuga eum, cupiditate natus placeat pariatur accusantium dignissimos quibusdam.</p>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card bg-info text-white">
                <div className="card-body">
                    <h5 className="card-title">Browser Compatible</h5>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error libero, fugiat ex quas recusandae, odit eligendi, sed reiciendis atque culpa blanditiis rerum ipsum possimus earum corporis quasi obcaecati accusamus sequi!</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
