import Multiselect from "multiselect-react-dropdown";
import React, {useState} from "react";

export default function Home() {
    const [tags, setTags] = useState(["Inscripciones", "Escuela Práctica", "Verano", "General"]);

    return ( 
    <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Subir una nueva novedad
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Subir novedad</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                    <label for="floatingTextarea2">Descripción</label>
                </div>
                <div class="form-floating mt-3">
                <Multiselect 
                    isObject={false}
                    onRemove={(value) => {console.log(value)}}
                    onSelect={(value) => {console.log(value)}}
                    options={tags}
                    placeholder="Tags"
                />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn" style={{backgroundColor: "#7D233A", color:"#FFFFFF", margin:"auto"}}>Compartir</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}