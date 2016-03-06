<?php

namespace iSterilization\Model;

/**
 * 
 * @Entity {"name":"module", "cache":"\\iSterilization\\Cache\\module", "event":"\\iSterilization\\Event\\module"}
 */
class module extends \Smart\Data\Model {

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "strategy":"AUTO", "type":"integer", "policy":true}
     */
    private $id;

    /**
     * @Policy {"nullable":false, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $name;

    /**
     * @Policy {"nullable":true, "default":"", "length":30}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $glyph;

    /**
     * @Policy {"nullable":false, "default":""}
     * @Column {"description":"", "type":"boolean", "policy":true}
     */
    private $isactive;

    /**
     * @return type integer
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @param type $id
     * @return \iSterilization\Model\module
     */
    public function setId($id) {
        $this->id = $id;
        return $this;
    }

    /**
     * @return type string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * @param type $name
     * @return \iSterilization\Model\module
     */
    public function setName($name) {
        $this->name = $name;
        return $this;
    }

    /**
     * @return type string
     */
    public function getGlyph() {
        return $this->glyph;
    }

    /**
     * @param type $glyph
     * @return \iSterilization\Model\module
     */
    public function setGlyph($glyph) {
        $this->glyph = $glyph;
        return $this;
    }

    /**
     * @return type boolean
     */
    public function getIsactive() {
        return $this->isactive;
    }

    /**
     * @param type $isactive
     * @return \iSterilization\Model\module
     */
    public function setIsactive($isactive) {
        $this->isactive = $isactive;
        return $this;
    }

}