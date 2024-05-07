let DescribeCity = (City:string = "Karachi", Country:string = "Pakistan") =>
    {
        console.log(`${City} is in ${Country}`)
    }
    DescribeCity()
    DescribeCity("Lahore")
    DescribeCity("London","England")