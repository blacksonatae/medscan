import { useEffect, useState } from "react";

export default function Beranda() {
    const [umurs, setUmurs] = useState("");
    const [tinggis, setTinggis] = useState("");
    const [berats, setBerats] = useState("");
    const [hypertensionStatus, setHypertensionStatus] = useState("");
    const [smokeStatus, setSmokeStatus] = useState("");
    const [heartStatus, setHeartStatus] = useState("");
    const [glucoses, setGlucoses] = useState("");

    const [isValidUmur, setIsValidUmur] = useState(false);
    const [isValidTinggis, setIsValidTinggis] = useState(false);
    const [isValidBerats, setIsValidBerats] = useState(false);
    const [isValidGlucoses, setIsValidGlucoses] = useState(false);


    const [isUmurTouched, setIsUmurTouched] = useState(false);
    const [isTinggisTouched, setIsTinggisTouched] = useState(false);
    const [isBeratsTouched, setIsBeratsTouched] = useState(false);
    const [isGlucosesTouched, setIsGlucosesTouched] = useState(false);
    const handleUmurChange = (e) => {
        const value = e.target.value;
        // Tandai jika pengguna memulai mengisi
        setIsUmurTouched(true);

        if (!isNaN(value) && Number(value) > 0) {
            setIsValidUmur(true);
        } else {
            setIsValidUmur(false);
        }
        setUmurs(value);
    }

    const handleTinggiChange = (e) => {
        const value = e.target.value;
        setIsTinggisTouched(true);

        if (!isNaN(value) && Number(value) > 0) {
            setIsValidTinggis(true);
        } else {
            setIsValidTinggis(false);
        }
        setTinggis(value);
    }

    const handleBeratChange = (e) => {
        const value = e.target.value;
        setIsBeratsTouched(true);

        if (!isNaN(value) && Number(value) > 0) {
            setIsValidBerats(true);
        } else {
            setIsValidBerats(false);
        }
        setBerats(value)
    }

    const handleGlucoseChange = (e) => {
        const value = e.target.value;
        setIsGlucosesTouched(true);

        if (!isNaN(value) && Number(value) > 0) {
            setIsValidGlucoses(true);
        } else {
            setIsValidGlucoses(false);
        }
        setGlucoses(value);
    }


    const submitHandled = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            {/* Header Sections */}
            <div className="">
                <h3 className="">Nama</h3>
            </div>

            {/* Formulir Sections */}
            <div className="card">
                <div className="card-body p-5">
                    <form className="row g-3 needs-validation" onSubmit={submitHandled}>
                        {/* Umur */}
                        <div className="col-12">
                            <label htmlFor="umur" className="form-label">Umur</label>
                            <input
                                type="text"
                                id="umur"
                                className={`form-control ${isUmurTouched ? (isValidUmur ? "is-valid" : "is-invalid") : "" }`}
                                placeholder="Masukan Umur"
                                value={umurs}
                                onChange={handleUmurChange}
                            />
                            {/* Menampilkan Status Error dan Benar */}
                            {isUmurTouched && isValidUmur && (
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            )}
                            {isUmurTouched && !isValidUmur && (
                                <div className="invalid-feedback">
                                    Umur harus berupa angka lebih dari 0.
                                </div>
                            )}
                        </div>
                        {/* BMI Level */}
                        <div className="col-md-6">
                            <label htmlFor="tinggiBadan" className="form-label">Tinggi Badan</label>
                            <input
                                type="text"
                                className={`form-control ${ isTinggisTouched ? (isValidTinggis ? "is-valid" : "is-invalid") : ""}`}
                                id="tinggiBadan"
                                placeholder="Masukan Tinggi Badan"
                                value={tinggis}
                                onChange={handleTinggiChange}
                            />
                            {/* Menampilkan Status Error dan Benar */}
                            {isTinggisTouched && isValidTinggis && (
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            )}
                            {isTinggisTouched && !isValidTinggis && (
                                <div className="invalid-feedback">
                                    Tinggi badan harus berupa angka lebih dari 0.
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="beratBadan" className="form-label">Berat Badan</label>
                            <input
                                type="text"
                                className={`form-control ${ isBeratsTouched ? (isValidBerats ? "is-valid" : "is-invalid") : ""}`}
                                id="beratBadan"
                                placeholder="Masukan Berat Badan"
                                value={berats}
                                onChange={handleBeratChange}
                            />
                            {/* Menampilkan Status Error dan Benar */}
                            {isBeratsTouched && isValidBerats && (
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            )}
                            {isBeratsTouched && !isValidBerats && (
                                <div className="invalid-feedback">
                                    Berat badan harus berupa angka lebih dari 0.
                                </div>
                            )}
                        </div>
                        {/* Hypertension Status */}
                        <div className="col-12">
                            <label htmlFor="hipertensi" className="form-label">Hipertensi</label>
                            <select
                                className="form-select"
                                id="hipertensi"
                                aria-label="Default select hipertensi"
                                onChange={(e) => setHypertensionStatus(e.target.value)}
                            >
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        {/* Smoke */}
                        <div className="col-12">
                            <label htmlFor="smoke" className="form-label">Smoke</label>
                            <select
                                className="form-select"
                                aria-label="Default select perokok"
                                onChange={(e) => setSmokeStatus(e.target.value)}
                            >
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        {/* Heart Status */}
                        <div className="col-12">
                            <label htmlFor="heartStatus" className="form-label">Heart Status</label>
                            <select
                                className="form-select"
                                id="heartStatus"
                                aria-label="Default select status jantung"
                                onChange={(e) => setHeartStatus(e.target.value)}
                            >
                                <option value="0">Non CHD</option>
                                <option value="1">CHD</option>
                            </select>
                        </div>
                        {/* Glucose Level */}
                        <div className="col-12">
                            <label htmlFor="glukosa" className="form-label">Level Glukosa</label>
                            <input
                                type="text"
                                id="glukosa"
                                className={`form-control ${isGlucosesTouched ? (isValidGlucoses ? "is-valid" : "is-invalid") : ""}`}
                                placeholder="Masukan Level Glukosa"
                                value={glucoses}
                                onChange={handleGlucoseChange}
                            />
                            {/* Menampilkan Status Error dan Benar */}
                            {isGlucosesTouched && isValidGlucoses && (
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            )}
                            {isGlucosesTouched && !isValidGlucoses && (
                                <div className="invalid-feedback">
                                    Level Glukosa harus berupa angka lebih dari 0.
                                </div>
                            )}
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <button type="submit" className="btn btn-primary w-50"
                                    disabled={!isValidUmur || !isValidGlucoses}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
