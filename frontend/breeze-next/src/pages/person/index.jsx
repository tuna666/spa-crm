import AppLayout from "@/components/Layouts/AppLayout";
import {
    DataGrid,
    GridColDef,
    GridRowsProp,
    GridToolbar,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarExport,
    jaJP
} from '@mui/x-data-grid'
import useSWR from "swr";

// const rows = [
//     {id: 1, name: 'JIN', kana: 'ジン', birth: '1992年12月4日'},
//     {id: 2, name: 'SUGA', kana: 'シュガ', birth: '1993年3月9日'},
//     {id: 3, name: 'J-HOPE', kana: 'ジェイホープ', birth: '1994年2月18日'},
//     {id: 4, name: 'RM', kana: 'アールエム', birth: '1994年9月12日'},
//     {id: 5, name: 'JIMIN', kana: 'ジミン', birth: '1995年10月13日'},
//     {id: 6, name: 'V', kana: 'ヴィ', birth: '1995年12月30日'},
//     {id: 7, name: 'JUNG KOOK', kana: 'ジョングク', birth: '1997年9月1日'}
// ]


function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton/>
            <GridToolbarExport csvOptions={{ utf8WithBom: true}}/>
        </GridToolbarContainer>
    )
}

export default function Index() {

    const fetcher = (url) => fetch(url).then((res) => res.json())
    const {data, mutate} = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/people`, fetcher)
    const people = data?.data
    console.log(people);
    // const [people, setResponses] = useState([])

    let rows = [];

    people &&
    people.map((person, index) => {
        rows.push(
            {
                id: person.id,
                last_name: person.last_name,
                first_name: person.first_name,
                email: person.email,
                mobile_number: person.mobile_number,
                home_zip: person.home_zip,
                home_address: person.home_address,
                memo: person.memo
            })
        }
    )


    // const cols = [
    //     {
    //         field: 'name',
    //         headerName: '英字'
    //     },
    //     {
    //         field: 'kana',
    //         headerName: '仮名'
    //     },
    //     {
    //         field: 'birth',
    //         headerName: '生年月日'
    //     }
    // ]

    const cols = [
        {
            field: 'last_name',
            headerName: '姓'
        },
        {
            field: 'first_name',
            headerName: '名'
        },
        {
            field: 'email',
            headerName: 'メールアドレス'
        },
        {
            field: 'mobile_number',
            headerName: '電話番号'
        },
        {
            field: 'home_zip',
            headerName: '自宅郵便番号'
        },
        {
            field: 'home_address',
            headerName: '自宅住所'
        },
        {
            field: 'memo',
            headerName: '担当者情報'
        }
    ]
    return (
        <AppLayout header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                担当者一覧
            </h2>
        }>

            <div className="max-w-4xl mx-auto mt-4">
                <DataGrid
                    columns={cols}
                    rows={rows}
                    density='comfortable'
                    autoHeight
                    components={{
                        // Toolbar: GridToolbar,
                        Toolbar: CustomToolbar,
                    }}
                    showColumnRightBorder // 列ヘッダセルの右側に線を引く
                    showCellRightBorder   // セルの右側に線を引く
                    checkboxSelection
                    localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
                />
            </div>
        </AppLayout>
    );
}
