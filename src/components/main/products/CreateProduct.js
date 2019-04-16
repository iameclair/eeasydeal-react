import React,{PureComponent, Fragment} from  'react';

class CreateProduct extends PureComponent{
    state={file:null};
    render() {
        return(
            <Fragment>
                <h1>Uploading image test</h1>
                <form onSubmit={e=>{e.preventDefault();
                    console.log("the file : ", this.state.file);
                    let url = "http://localhost:4000/api/file/uploadMultipleFiles";
                    const formData = new FormData();
                    formData.append(
                        'files',
                        this.state.file
                    );
                    const requestOptions ={
                        method: 'POST',
                        body: formData
                    };
                    console.log("Request option: ", requestOptions);
                    let fetch1 = fetch;
                    fetch1(url, requestOptions)
                        .then(success=>{console.log(success)}, failure=>{console.log(failure)});
                }}>
                    <input type="file" onChange={e=>{this.setState({file:e.target.files[0]})}}/>
                    <button type="submit">upload file</button>
                </form>
            </Fragment>
        )
    }
}

export default CreateProduct;