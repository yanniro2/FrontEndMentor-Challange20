import "./index.css"
import logo from "./images/logo.svg"
import datas from "./data.json";
import BarChart from "./BarChart";
function App()
{

  // const newArray = [...datas.map(o => o.amount)];
  // console.log(newArray);
  // for (let i in newArray) {
  //   total += newArray[i];
  // }
  const max = Math.max(...datas.map(o => o.amount))
  const barCharDatas = datas.map((data) =>

    // const size = 10;
    // const value = Math.round((data.amount) / size);
    <BarChart data={data} key={data.day} value={Math.round((data.amount) * 2)} max={max} />

  )
  return (
    <div className="App h-screen w-screen flex justify-center items-center bg-Cream m-0 p-0 box-border font-DmSans text-ms Desktop:bg-[orange]">
      <div className="contant min-h-1/2  h-2/3 w-1/3 flex flex-col items-center gap-3 Mobile:w-full Mobile:p-5 Mobile:h-4/5 Desktop:h-1/2">
        {/* top */}
        <div className="top w-full rounded-xl p-8 bg-Soft-red h-1/5 drop-shadow-sm text-Very-pale-orange flex justify-between items-center">
          {/* left */}
          <div className="left flex flex-col justify-center gap-1">
            <small className=" text-Cream font-[10px]">My balance</small>
            <h2 className="font-xl text-[1.2rem]">$921.48</h2>
          </div>
          {/* Right */}
          <img src={logo} alt="logo img" className="w-[3rem]" />
        </div>
        {/* Bottom */}
        <div className="main w-full rounded-xl p-8 bg-Very-pale-orange h-4/5 drop-shadow-sm flex flex-col justify-between gap-2">
          <div className="w-full h-[70%] flex flex-col justify-between">
            <h3 className="font-xl text-Dark-brown">Spending - Last 7 Days</h3>
            {/* Section */}
            <section className="flex gap-1 items-end">
              {barCharDatas}
            </section>
          </div>

          <div className="w-full h-[30%] flex flex-col justify-between">
            <span className="text-Cream"><hr /></span>
            <div className="end flex w-full items-center justify-between">
              {/* left */}
              <div className="left flex flex-col gap-1">
                <small className=" text-Medium-brown font-ms text-[12px]">Total this month</small>
                <h3 className="text-[2rem] font-xl text-Dark-brown">$478.33</h3>
              </div>
              {/* right */}
              <div className="right flex flex-col items-end gap-1">
                <h4 className=" text-[14px] font-xl">+2.4%</h4>
                <small className=" text-Medium-brown font-ms text-[12px]">from last month</small>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
