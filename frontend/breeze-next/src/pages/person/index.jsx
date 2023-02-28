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
    const {data} = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/people`, fetcher)
    const people = data?.data
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
