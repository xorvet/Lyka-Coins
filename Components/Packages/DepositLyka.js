import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import ABI from '../../Web3Resources/ABI';
import Web3 from 'web3';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DepositLyka = ({ id, inputValue, setGoForDeposit, getData ,packageName, packagePeriod, packageReward, packageMin, packageMax, amountDeposit}) => {
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = window.localStorage.getItem("user");
      const parsedUserId = userId.replaceAll('"', "");
      setUserId(parsedUserId);
    }
  }, []);

  const openMetaMask = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(async(accounts) => {
        const web3 = new Web3(window.ethereum);
				const contract = new web3.eth.Contract(ABI,"0xB1E019D89b46c782232048c6CCe5ba0396F1bA67");
				let amount = web3.utils.toWei(inputValue.toString());
        setIsLoading(true)
			await contract.methods.approve("0x531B05284aAb36fB15A57edeC2670404D025714a", amount).send({from: accounts[0]});
			const two =	await contract.methods.transfer("0x531B05284aAb36fB15A57edeC2670404D025714a", amount).send({from: accounts[0]});
     
      console.log(two.blockHash)
        try {
          axios
            .post("/api/Package/ActivatePackage", {
              userID: userId,
              PackageName: packageName,
              PackagePeriod: packagePeriod,
              PackageReward: packageReward,
              PackageMin: packageMin+"$",
              PackageMax: packageMax+"$",
              AmountDeposit: amountDeposit+"$",
              LykaTokens: Number(inputValue) * 2,
              Hash:two.blockHash
            })
            .then((acc) => {
              setIsLoading(false)
              router.push("/")
              getData();
              setGoForDeposit(false);
            })
            .catch((err) => {
              setIsLoading(false)
              console.log(err);
            });
          } catch (error) {
            
        console.log(error)
            
            
          }
        }).catch((err)=>{
          
          setIsLoading(false)
          toast.error(err.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
      })
    } else {
      alert("install metamask extension!!");
    }
  };

  return (
    
    <>
      <h3 className="mb-4 mt-5">Deposit Lyka</h3>
      {
        isLoading ? 
        <div className="text-center">

        <img src="https://i.stack.imgur.com/hzk6C.gif" style={{width:200}} className="img-fluid" alt="" />
        <p style={{fontSize:15}}>Metmask Will Open Now. Please Continue Your Transaction</p>
        <p style={{color:"#AA0C98"}}>Don't Refresh This Page Until Transaction Completed</p>
        </div>


        :


      <div
        className="mb-5 mt-5"
        style={{
          borderColor: "#0CDCE5",
          borderWidth: 2,
          borderStyle: "solid",
          padding: 30,
          borderRadius: 10,
        }}
      >
        <h4>
          You Need To Deposit{" "}
          <span style={{ fontWeight: "bold" }}>
            {Number(inputValue) * 2} Lyka Tokens{" "}
          </span>{" "}
          To Activate This Plan
        </h4>

        <h6 style={{ color: "#21AE8C", fontWeight: "bold" }}>
          0x531B05284aAb36fB15A57edeC2670404D025714a
        </h6>

        <div className="mt-4">
          <button onClick={openMetaMask} className="btn btn-primary">
            Deposit
          </button>
        </div>

        <p
          style={{ cursor: "pointer" }}
          className="text-danger mt-5 ml-2"
          onClick={() => setGoForDeposit(false)}
        >
          Cancel
        </p>
      </div>

      
      }
    </>
  );
};

export default DepositLyka;
