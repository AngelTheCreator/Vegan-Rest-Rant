const React = require('react');
const Def = require('../default');

function new_form (data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert-danger'>{data.message}</h4>
        )
    }
    return (
        <Def>
            <main>
                <h1>Add a new Vegan place</h1>
                {message}
                <form method="POST" action="/places">
                    <div className='row'>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' id="name" name="name" required />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                         <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type='url' id="pic" name="pic" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' id="city" name="city" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor="state">State</label>
                        <input className='form-control' id="state" name="state" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' id="cuisines" name="cuisines" required />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor='founded'>Founded Year</label>
                        <input 
                        type='number'
                        className='form-control' 
                        id='founded' 
                        name='founded'
                        value={new Date().getFullYear()} />
                    </div>
                        <input className='btn btn-primary' type="submit" value="Add Place" />
                        </div>
                    </form>
                    

            </main>
        </Def>
    )
}



module.exports = new_form;