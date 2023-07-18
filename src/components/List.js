import { useRecoilValue } from "recoil";
import { coordinatesState,addressState } from "../store/store";


const List = ({totalCount,pageNo}) => {
  const coordinatesList = useRecoilValue(coordinatesState);
  const addressList = useRecoilValue(addressState);
  console.log(coordinatesList)
  return (
    <>
      {coordinatesList && (
        <>
          <ul id="placesList">
            {coordinatesList.map((coordinate,index) => (
              <li key={index}>
                <span className={`markerbg marker_${index+1}`}></span>
                <div className="info info-design">
                  <h5>{coordinate.road_address?.building_name}</h5>
                  <span>{coordinate.road_address?.address_name}</span>
                  <span className="jibun gray">{coordinate.address?.address_name}</span>
                  <span className="tel">01012341234</span>
                </div>
              </li>
            ))}
          </ul>
          <div id="pagination">
            {/* 페이지네이션 기능은 추후 진행 */}
          </div>
        </>
      )}
    </>
  )

}
export default List;