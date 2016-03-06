<?php

namespace iSterilization\Model;

/**
 * 
 * @Entity {"name":"menuaction", "cache":"\\iSterilization\\Cache\\menuaction", "event":"\\iSterilization\\Event\\menuaction"}
 */
class menuaction extends \Smart\Data\Model {

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "strategy":"AUTO", "type":"integer", "policy":true}
     */
    private $id;

    /**
     * @Policy {"nullable":false, "default":""}
     * @Column {"description":"", "type":"integer", "policy":true}
     */
    private $menuid;

    /**
     * @Policy {"nullable":false, "default":""}
     * @Column {"description":"", "type":"integer", "policy":true}
     */
    private $actionid;

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
     * @return \iSterilization\Model\menuaction
     */
    public function setId($id) {
        $this->id = $id;
        return $this;
    }

    /**
     * @return type integer
     */
    public function getMenuid() {
        return $this->menuid;
    }

    /**
     * @param type $menuid
     * @return \iSterilization\Model\menuaction
     */
    public function setMenuid($menuid) {
        $this->menuid = $menuid;
        return $this;
    }

    /**
     * @return type integer
     */
    public function getActionid() {
        return $this->actionid;
    }

    /**
     * @param type $actionid
     * @return \iSterilization\Model\menuaction
     */
    public function setActionid($actionid) {
        $this->actionid = $actionid;
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
     * @return \iSterilization\Model\menuaction
     */
    public function setIsactive($isactive) {
        $this->isactive = $isactive;
        return $this;
    }

}