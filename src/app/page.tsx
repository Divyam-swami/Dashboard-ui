import { CardContent } from "@/components/Card";
import PageTitle from "@/components/pagetitle";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCart";
import LineChart from "@/components/LineChart";
import SubscriptionCart, { SubsciptionProps } from "@/components/subscriptionCart";
import Maincard from "@/components/maincard";

const userSalesData: SalesProps[]=[
  {
    name: "Jashan Kumar",
    email: "Jashankumar@gmail.com",
    saleAmount: "+₹50,999.00"
  },
  {
    name: "Ritesh Saini",
    email: "Riteshsaini@gmail.com",
    saleAmount: "+₹43,299.00"
  },
  {
    name: "Srishti Verma",
    email: "Srishtiverma@gmail.com",
    saleAmount: "+₹20,100.00"
  },
  {
    name: "Kartik Desai",
    email: "Kartikdesai@gmail.com",
    saleAmount: "+₹10,999.00"
  },
  {
    name: "Divyum Swami",
    email: "Divyumswami@gmail.com",
    saleAmount: "+₹80,254.00"
  },
]


const SubscriptionData: SubsciptionProps[]=[
  {
    name:"Vidushi sharma",
    email:"vidushi@gmail.com",
    status:"Subscribed"
  },
  {
    name:"Abhay raghuvanshi",
    email:"abhay@gmail.com",
    status:"Subscribed"
  },
  {
    name:"Rk sharma",
    email:"RK@gmail.com",
    status:"Subscribed"
  },
  {
    name:"Sahil Mani",
    email:"sahil@gmail.com",
    status:"Subscribed"
  },
  {
    name:"Mahi kaul",
    email:"mahi@gmail.com",
    status:"Subscribed"
  },
  {
    name:"Raman kumar",
    email:"ramankuar@gmail.com",
    status:"Subscribed"
  },
]

export default function Home() {
  return (
    <div  className="flex flex-col gap-2 w-full ">
          <PageTitle title="Dashboard" data-aos="fade-up"/>
         <Maincard/>
          <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
              <CardContent className="min-h-[400px]">
                <p className="p-4 font-semibold">Overview</p>
                <BarChart/>
              </CardContent>
              <CardContent className="min-h-[400px] flex justify-between gap-4"> 
              <LineChart/>
              </CardContent>
          </section>
          <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
              <CardContent className="min-h-[400px]">
              <section>
                  <p>Recent Subsciptions</p>
                  <p className="text-sm text-gray-400">
                     2065 Subscibed this month
                  </p>
                </section>
                {SubscriptionData.map((d,i)=>(
                  <SubscriptionCart key={i}
                  email={d.email}
                  name={d.name}
                  status={d.status} />
                ))}
              </CardContent>
              <CardContent className="min-h-[400px] flex justify-between gap-4"> 
              <section>
                  <p>Recent Sales</p>
                  <p className="text-sm text-gray-400">
                    You made 265 sales this much
                  </p>
                </section>
                {userSalesData.map((d,i)=>(
                  <SalesCard key={i}
                  email={d.email}
                  name={d.name}
                  saleAmount={d.saleAmount} />
                ))}
              </CardContent>
          </section>
    </div>
  );
}
