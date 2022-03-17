import React, { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { connect } from "../../redux/blockchain/blockchainActions"
import { fetchData } from "../../redux/data/dataActions"
import styles from "./comicButton.module.css"
const ComicButton = ({ pageIndex, currentPage }) => {
	const dispatch = useDispatch()
	const blockchain = useSelector((state) => state.blockchain)
	const [showBubble, setShowBubble] = useState(false)
	const [clicked, setClicked] = useState(false)
	const bubbleRef = useRef(null)
	const buttonRef = useRef(null)
	const data = useSelector((state) => state.data)
	const [claimingNft, setClaimingNft] = useState(false)
	const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`)
	const [mintAmount, setMintAmount] = useState(1)
	const [CONFIG, SET_CONFIG] = useState({
		CONTRACT_ADDRESS: "",
		SCAN_LINK: "",
		NETWORK: {
			NAME: "",
			SYMBOL: "",
			ID: 0,
		},
		NFT_NAME: "",
		SYMBOL: "",
		MAX_SUPPLY: 1,
		WEI_COST: 0,
		DISPLAY_COST: 0,
		GAS_LIMIT: 0,
		MARKETPLACE: "",
		MARKETPLACE_LINK: "",
		SHOW_BACKGROUND: false,
	})

	const claimNFTs = () => {
		let cost = CONFIG.WEI_COST
		let gasLimit = CONFIG.GAS_LIMIT
		let totalCostWei = String(cost * mintAmount)
		let totalGasLimit = String(gasLimit * mintAmount)
		setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)
		setClaimingNft(true)
		blockchain.smartContract.methods
			.mint(mintAmount)
			.send({
				gasLimit: String(totalGasLimit),
				to: CONFIG.CONTRACT_ADDRESS,
				from: blockchain.account,
				value: totalCostWei,
			})
			.once("error", (err) => {
				console.log(err)
				setFeedback("Sorry, something went wrong please try again later.")
				setClaimingNft(false)
			})
			.then((receipt) => {
				console.log(receipt)
				setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`)
				setClaimingNft(false)
				dispatch(fetchData(blockchain.account))
			})
	}

	const decrementMintAmount = () => {
		let newMintAmount = mintAmount - 1
		if (newMintAmount < 1) {
			newMintAmount = 1
		}
		setMintAmount(newMintAmount)
	}

	const incrementMintAmount = () => {
		let newMintAmount = mintAmount + 1
		if (newMintAmount > 10) {
			newMintAmount = 10
		}
		setMintAmount(newMintAmount)
	}

	const getData = () => {
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account))
		}
	}

	const getConfig = async () => {
		const configResponse = await fetch("/config/config.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
		const config = await configResponse.json()
		SET_CONFIG(config)
	}

	const onClickHandler = (e) => {
		e.preventDefault()
		dispatch(connect())
		getData()
		setClicked((state) => !state)
	}

	useEffect(() => {
		getConfig()
		return () => {}
	}, [])

	useEffect(() => {
		getData()
	}, [blockchain.account])

	// Initialize state on page change
	useEffect(() => {
		setShowBubble(false)
		setClicked(false)
	}, [currentPage])

	useEffect(() => {
		if (clicked && blockchain.errorMsg !== "") {
			setShowBubble(true)
		} else if (clicked && blockchain.errorMsg === "") {
			buttonRef.current.classList.add(styles[`animatedBtn${pageIndex}`])
		}
	}, [blockchain, clicked])

	return (
		<>
			<button
				disabled={claimingNft ? 1 : 0}
				onClick={onClickHandler}
				className={styles.comicButton}
				ref={buttonRef}
			>
				Mint
			</button>
			{showBubble && clicked && (
				<>
					<div
						className={styles.installMetamask}
						onClick={() => {
							setShowBubble(false)
						}}
						ref={bubbleRef}
					>
						<div className={styles.contWrapper}>
							<p
								style={{
									textAlign: "center",
								}}
							>
								{blockchain.errorMsg}
							</p>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default React.memo(ComicButton)
