
import Swal from 'sweetalert2'

const Addcoffee = () => {


    const handelersubmit = (event) =>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const Quntty =form.Quntty.value;
        const Supplier =form.Supplier.value;
        const Taste =form.Taste.value;
        const Category =form.Category.value;
        const Details =form.Details.value;
        const photourl =form.photourl.value;
        const updatecoffee ={name,Quntty,Supplier,Taste,Category,Details,photourl}
        console.log(updatecoffee);

        fetch(`http://localhost:5000/coffee`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatecoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'seccessssssssssssss',
                    showClass: {
                      popup: 'Update secssssss'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }
        })

    }





    return (

        <div className='bg-stone-100 p-24'>
            <h1 className='font-bold'>Add New Coffee Add New Coffee</h1>
            <form onSubmit={handelersubmit}>
                {/* form row */}
                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="name" className="input input-bordered w-full" />
                        </label>  
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Quntty</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Quntty' placeholder="Quntty" className="input input-bordered w-full" />
                        </label>
                      
                    </div>
                </div>
                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Supplier' placeholder="Supplier" className="input input-bordered w-full" />
                        </label>  
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Taste' placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                      
                    </div>
                </div>
                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Category' placeholder="Category" className="input input-bordered w-full" />
                        </label>  
                    </div>
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">photo-url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photourl' placeholder="photo-url" className="input input-bordered w-full" />
                        </label>
                    </div>
                <input className="btn btn-block" type="submit" value="Add card" />
            </form>

        </div>

    );
};

export default Addcoffee;