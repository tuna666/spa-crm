<?php

namespace App\Http\Controllers;

use App\Http\Resources\PersonResource;
use App\Http\Resources\PersonWithRelationsResource;
use App\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $people = Person::all();

        return PersonWithRelationsResource::collection($people);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return PersonResource
     */
    public function store(Request $request)
    {
        $person = Person::create($request->only(
            ['last_name',
            'first_name',
            'email',
            'mobile_number',
            'home_zip',
            'memo',
            'created_at',
            'updated_at']
        ));

        return new PersonResource($person);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return PersonWithRelationsResource
     */
    public function show(int $id)
    {
        $person = Person::findOrFail($id);

        return new PersonWithRelationsResource($person);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Person $person)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy(Person $person)
    {
        //
    }
}
