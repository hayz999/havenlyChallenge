<?php

namespace Havenly;

class Mather
{
    protected $value;

    /**
     * @param int $startingValue
     */
    public function __construct(
        int $startingValue
    ) {
        $this->value = $startingValue;
    }

    /**
     * @return int
     */
    public function getCurrentValue()
    {
        return $this->value;
    }

    /**
     * @param int $value
     */
    public function setValue(int $value)
    {
        $this->value = $value;
    }

    /**
     * @param int $exponent
     */
    public function setCurrentValueToPowerOf(int $exponent)
    {
        // Takes the current value of this object
        // And Takes it to the Value of the power
        // For example. If the current value is 2
        // and you pass 2, it should set the new value to 4
    }

    /**
     * @return array
     */
    public function splitCurrentValueIntoArray()
    {
        // Returns an array of integers for each integer in the current value
        // For example, if the current value is 22, this will return [2, 2]


        // This is a placeholder, should be changed.
        return [];
    }

    /**
     * @param array $ints
     * @return int
     */
    public function sumOfArray(array $ints)
    {
        // Takes an array of integers and returns the sum of all of the parts
        // Ex. If passed [2, 2] returns 4;

        // This is a placeholder, should be changed.
        return 0;
    }
}
