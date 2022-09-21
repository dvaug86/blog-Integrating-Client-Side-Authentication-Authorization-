import * as React from 'react';

const BadPage: React.FC<BadPageProps> = (props) =>{
    return(
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <h1 className='display-1 text-center' >This page is a nogo try a different link</h1>
                </div>
            </section>
        </main>
    )
}

interface BadPageProps {}

export default BadPage;