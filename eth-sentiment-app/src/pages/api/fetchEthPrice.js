import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

export default async function handler(req, res) {
    try {
        const q = query(collection(db, "eth_data"), orderBy("timestamp", "desc"), limit(100));
        const querySnapshot = await getDocs(q);

        let ethData = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            ethData.push({
                ...data,
                timestamp: data.timestamp.toDate().toISOString() // Convert Firestore Timestamp to ISO string
            });
        });

        res.status(200).json(ethData);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Ethereum prices" });
    }
}
