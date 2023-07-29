 

const getPredictedAge = async (name:string) => { 
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json() 
}
const getPredictedGender = async (name:string) => { 
  const res = await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json() 
}

const getPredictedCountry = async (name:string) => { 
  const res = await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json() 
}


interface Params { 
  params : { name : string}; 
}

const Page = async ({params}: Params) => {
  const ageData = getPredictedAge(params.name)
  const genderData = getPredictedGender(params.name)
  const countryData = getPredictedCountry(params.name)
  
  const [age, gender, country] = await Promise.all([ageData, genderData, countryData])
  return (
    <div className="mt-52 max-w-md mx-auto bg-black rounded-xl shadow-md ">
      <div className="p-8"> 
        <div className="text-center text-lg mb-2 uppercase tracking-wide text-sm text-white font-serif"> Personal Info </div>
        <div className="block mt-1  font-medium text-white"> Age : {age?.age}</div>
        <div className="block mt-1  font-medium text-white"> Gender : {gender?.gender}</div>
        <div className="block mt-1  font-medium text-white"> Country : {country?.country[0]?.country_id}</div>
      </div>
    </div>
  )
}

export default Page