import { useSelector } from "react-redux";

const Header = () => {
    const state = useSelector((store) => store.flight); // "flight" slice'ının adını doğru yazdığınızdan emin olun
    return (
        <header>
            <div>
                <img src="/plane-l.png" alt="" />
                <h3>My Radar</h3>
            </div>
            <p>
                {
                    state.isLoading ? 'Uçuşlar Hesaplanıyor...' :
                        state.isError ? 'Bir Sorun Oluştu' :
                            state.flights.length + ' Uçuş Bulundu' // "length" doğru yazılmış
                }
            </p>
        </header>
    );
};

export default Header;