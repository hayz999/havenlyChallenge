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
        $valueToPower = (pow($value, $exponent));
        // int to the power of $exponent stored in a variable
        // pass that variable to splitCurrentValueIntoArray
        splitCurrentValueIntoArray($valueToPower);
    }

    /**
     * @return array
     */
    public function splitCurrentValueIntoArray($value)
    {
        $array = str_split($value);
        // number is split into individual numbers in an array
        sumOfArray($array);
        return [];
    }

    /**
     * @param array $ints
     * @return int
     */
    public function sumOfArray(array $ints)
    {
        // loop through array and sum each number to a total variable which should start at 0 
        $total = 0;
        foreach ($ints as $number) {
            $total += $number;
        };
        return $total;
    }
}


// used video series from this website to get an understanding of php: https://laracasts.com/skills/php 